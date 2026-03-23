import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import api from '../lib/api';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const AdminApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await api.get('/applications');
      setApplications(response.data);
    } catch (error) {
      toast.error("Failed to fetch applications");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />
      <main className="container mx-auto py-24 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Job Applications</h1>
          <Button asChild variant="outline">
            <Link to="/admin">Back to Dashboard</Link>
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p>Loading applications...</p>
            ) : applications.length === 0 ? (
              <p>No applications found.</p>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Applicant</TableHead>
                      <TableHead>Passport No</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Job / Inquiry</TableHead>
                      <TableHead>Message</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {applications.map((app: any) => (
                      <TableRow key={app._id}>
                        <TableCell>{new Date(app.submittedAt).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            app.type === 'contact_inquiry' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                          }`}>
                            {app.type === 'contact_inquiry' ? 'Inquiry' : 'Application'}
                          </span>
                        </TableCell>
                        <TableCell className="font-medium">{app.name}</TableCell>
                        <TableCell>
                          {app.passportNumber ? (
                            <span className="font-mono text-sm bg-muted px-2 py-1 rounded">{app.passportNumber}</span>
                          ) : (
                            <span className="text-muted-foreground text-xs italic">N/A</span>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">{app.email}</div>
                          <div className="text-sm text-muted-foreground">{app.phone}</div>
                        </TableCell>
                        <TableCell>
                          {app.type === 'contact_inquiry' ? (
                            <span className="text-sm font-medium italic">{app.inquiryType}</span>
                          ) : (
                            app.jobId?.caption || 'Job Deleted'
                          )}
                        </TableCell>
                        <TableCell className="max-w-xs truncate">{app.message}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminApplications;
