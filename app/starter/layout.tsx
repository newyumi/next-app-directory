import { getCategories } from '#/app/api/categories/getCategories';
import { ClickCounter } from '#/ui/click-counter';
import { TabGroup } from '#/ui/tab-group';
import React from 'react';

const title = 'Starter';

export const metadata = {
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};

const items = [
  {
    text: 'SSR',
    slug: 'server-side',
  },
  // TODO: 추가
  // {
  //   text: 'Slug',
  //   slug: 'slug',
  // },
  // {
  //   text: 'Slot',
  //   slug: 'slot',
  // },
  // {
  //   text: 'e2e',
  //   slug: 'e2e-test',
  // },
  // {
  //   text: 'Deploy',
  //   slug: 'deploy',
  // },
];

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();

  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="/starter"
          items={[
            {
              text: 'Home',
            },
            ...items,
          ]}
        />

        <div className="self-start">
          <ClickCounter />
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
