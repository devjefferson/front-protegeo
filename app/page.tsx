
import getCurrentUser from '@/services/auth/customer/getCurrentUser';
import {  servicesPosts } from '@/services/post';
import Home from './(publics)/_features/Home';
import { TCustomer } from '@/models/customer';

export default async function Page() {
  const [data, user] = await Promise.all([servicesPosts(), getCurrentUser()]);

  return (
    <Home data={data as any} user={user as TCustomer} />
  );
}
