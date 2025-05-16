
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../integrations/supabase/client';
import Navbar from '../components/Navbar';
import { toast } from '../components/ui/sonner';
import { Button } from '@/components/ui/button';

interface Profile {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
}

const Dashboard = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }

    const fetchProfile = async () => {
      if (!user) return;
      
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
          
        if (error) {
          throw error;
        }
        
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
        toast.error('Could not load your profile information');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [user, loading, navigate]);

  if (loading || isLoading) {
    return (
      <div className="min-h-screen bg-miggle-beige text-foreground font-sans">
        <Navbar />
        <div className="pt-32 pb-20 px-4 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-miggle-peach mx-auto mb-4"></div>
            <p>Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to auth page
  }

  return (
    <div className="min-h-screen bg-miggle-beige text-foreground font-sans">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h1 className="text-4xl font-handwriting mb-6">
              <span className="hand-drawn">Welcome to Your Dashboard</span>
            </h1>
            
            <div className="mb-8">
              <h2 className="text-2xl font-handwriting mb-4">Your Profile</h2>
              <div className="bg-miggle-peach/10 p-6 rounded-lg">
                <p className="mb-2"><strong>Email:</strong> {user.email}</p>
                <p className="mb-2"><strong>Name:</strong> {profile?.full_name || 'Not set'}</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => toast.info('Profile editing coming soon!')}
                >
                  Edit Profile
                </Button>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-handwriting mb-4">Miggle Light Updates</h2>
              <div className="bg-miggle-yellow/10 p-6 rounded-lg">
                <p className="italic">No updates yet. Stay tuned for exciting news about Miggle Light!</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-handwriting mb-4">Your Preferences</h2>
              <div className="bg-miggle-green/10 p-6 rounded-lg">
                <p className="mb-6">Manage your notification preferences:</p>
                <div className="space-y-3">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded text-miggle-peach" />
                    <span>Email updates about Miggle Light</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded text-miggle-peach" />
                    <span>Pre-order notifications</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-miggle-peach" />
                    <span>Special offers and promotions</span>
                  </label>
                </div>
                <Button 
                  className="mt-6 bg-miggle-peach hover:bg-miggle-peach/90"
                  onClick={() => toast.success('Preferences saved!')}
                >
                  Save Preferences
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
