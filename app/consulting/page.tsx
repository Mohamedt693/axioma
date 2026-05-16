import { Metadata } from 'next';
import ConsultingClient from '@/components/client/ConsultingClient';

export const metadata: Metadata = {
  title: 'Book a Consultation | Axioma Studio',
  description: 'Share your architectural vision with us. Start your multi-step consultation for your next modern project.',
};

export default function Page() {
  return <ConsultingClient />;
}