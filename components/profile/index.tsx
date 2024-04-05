import { getCart } from 'lib/shopify';
import { cookies } from 'next/headers';
import ProfileModal from './modal';

export default async function Profile() {
  const cartId = cookies().get('cartId')?.value;
  let cart;

  if (cartId) {
    cart = await getCart(cartId);
  }

  return <ProfileModal cart={cart} />;
}
