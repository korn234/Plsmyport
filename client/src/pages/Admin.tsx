import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { format } from "date-fns";
import { Loader2 } from "lucide-react";

type ContactSubmission = {
  id: number;
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
  createdAt: string;
}

export default function Admin() {
  const { data, isLoading, error } = useQuery<ContactSubmission[]>({
    queryKey: ['/api/submissions'],
  });

  // Format timestamp for display
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'MMM dd, yyyy HH:mm');
    } catch (error) {
      return dateString;
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin - Contact Submissions | TechCorp Solutions</title>
      </Helmet>
      
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-secondary dark:text-white mb-8">
            Admin Dashboard
          </h1>
          
          <div className="card-3d bg-white dark:bg-secondary/20 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-heading font-semibold mb-6 text-secondary dark:text-white dark:glow-text">
              Contact Form Submissions
            </h2>
            
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="h-8 w-8 text-primary animate-spin" />
                <span className="ml-2 text-gray-dark dark:text-gray-300">Loading submissions...</span>
              </div>
            ) : error ? (
              <div className="bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-300 p-4 rounded-lg">
                Error loading contact submissions. Please try again later.
              </div>
            ) : !data || data.length === 0 ? (
              <div className="bg-gray-50 dark:bg-gray-800/30 p-8 rounded-lg text-center">
                <p className="text-gray-dark dark:text-gray-300">No contact form submissions yet.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableCaption>A list of recent contact form submissions.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Message</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell className="font-medium">{submission.id}</TableCell>
                        <TableCell>{submission.name}</TableCell>
                        <TableCell>{submission.email}</TableCell>
                        <TableCell>{submission.company}</TableCell>
                        <TableCell>{submission.service}</TableCell>
                        <TableCell className="max-w-xs truncate">{submission.message}</TableCell>
                        <TableCell>{formatDate(submission.createdAt)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}