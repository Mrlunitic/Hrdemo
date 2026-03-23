import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import { MapPin, Users, Clock } from "lucide-react";

interface PostCardProps {
  post: {
    _id: string;
    caption: string;
    imageUrl: string;
    country?: string;
    candidatesNeeded?: string;
    createdAt: string;
  };
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.caption} 
          className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-2 text-xl mb-1">{post.caption}</CardTitle>
        <div className="flex flex-col gap-1.5 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1.5 text-primary font-medium">
            <MapPin className="w-4 h-4" />
            <span>{post.country || 'International'}</span>
          </div>
          {post.candidatesNeeded && (
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4" />
              <span>{post.candidatesNeeded} Candidates Required</span>
            </div>
          )}
          <div className="flex items-center gap-1.5 opacity-70">
            <Clock className="w-4 h-4" />
            <span>Posted on {new Date(post.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </CardHeader>
      <CardFooter>
        <Button asChild className="w-full bg-primary hover:bg-primary/90">
          <Link to={`/apply?jobId=${post._id}&title=${encodeURIComponent(post.caption)}`}>
            Apply Now
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
