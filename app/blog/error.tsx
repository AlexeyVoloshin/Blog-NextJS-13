'use client';

export default function ErrorWrapper({ error }: { error: Error }) {
  return <h1>Opps!!! {error.message}</h1>;
}

