import React from 'react';

type Props = { name: string };

export default function Happy({ name }: Props) {
  return <div>{name}</div>;
}
