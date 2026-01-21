import { redirect } from 'next/navigation';

export default async function RedirectSlug({ params }) {
  const { slug } = await params;
  redirect(`/pages/ar/recipes/${slug}`);
}
