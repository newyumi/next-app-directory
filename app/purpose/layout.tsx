import { getCategories } from '#/app/api/categories/getCategories';
import React from 'react';
import { ExternalLink } from '#/ui/external-link';

const title = 'Purpose';

export const metadata = {
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <div style={{ marginBottom: 40 }}>
        <h1 className="text-xl font-bold">Purpose</h1>

        <ul>
          <li>Study for Next.js v14 routes and sample pages</li>
        </ul>

        <div className="flex gap-2">
          <ExternalLink href="https://nextjs.org/docs/getting-started/installation">
            Docs
          </ExternalLink>
          <ExternalLink href="https://github.com/vercel/app-playground/tree/main">
            Code
          </ExternalLink>
        </div>
      </div>

      <div style={{ marginBottom: 40 }}>
        <h1 className="text-xl font-bold">Server Side Rendering</h1>

        <ul>
          <li>
            SSR은 서버가 HTML 파일을 만들어 보내주면 브라우저가 받고, 이후 JS
            파일을 다운받아서 React를 실행함, 이 후 페이지 작동. 첫페이지
            로딩속도 빠르고, 검색엔진 최적화가 가능.
          </li>
          <li>
            But, 초기 로딩 이후 페이지 이동 시 CSR에 비해 느리고, 깜빡임 이슈가
            있을 수 있음.
          </li>
          <li>
            14 버전에서는 라우팅하는 폴더마다 layout, page 2개의 파일이 꼭
            있어야한다.
          </li>
        </ul>
      </div>

      <div style={{ marginBottom: 40 }}>
        <h1 className="text-xl font-bold">Dynamic Routes</h1>
        <ul>
          <li>
            [slug] 슬러그는 동적경로이며 parameter에 따라 변경된다. 주소는
            /[slug]로 파라미터로 `blog`를 넘기면 /blog가 되는것. yarn build 하면
            정적으로 파일이 생성된다.
          </li>
          <li>
            슬러그는 웹 사이트의 특정 페이지를 쉽게 읽을 수 있는 형태로 식별하는
            URL의 일부
          </li>
        </ul>
      </div>

      <div style={{ marginBottom: 40 }}>
        <h1 className="text-xl font-bold">Parallel Routes</h1>
        <ul>
          <li>폴더명에 @slot을 붙인다.</li>
          <li>app/layout.js, app/page.js</li>
          <li>app/@team/pages.js</li>
          <li>app/@analytics/pages.js</li>
          <li>
            team, analytics 페이지를 app/layout에서 병렬로 보여지도록 설정할 수
            있다.
          </li>
          <li>
            route @슬롯: 슬롯은 라우트 세그먼트가 아니며, URL 구조에 영향을 주지
            않는다. 파일 경로 /@team/members는 /members에서 접근할 수 있지만!!
          </li>
          <li style={{ color: 'yellow' }}>
            Soft Navigation으로만 이동 가능, Hard Navigation(주소로 접근)으로
            이동시 404 에러 페이지가 뜸. 전체 페이지 재렌더링이 필요한 Hard
            Navigation에서 Next.js는 먼저 일치하지 않는 슬롯의 default.js 파일을
            렌더링하려고 시도하고, 사용할 수 없는 경우 404를 렌더링함
          </li>
        </ul>

        <div className="flex gap-2">
          <ExternalLink href="https://nextjs.org/docs/app/building-your-application/routing/parallel-routes">
            Docs
          </ExternalLink>
          <ExternalLink href="https://github.com/vercel/app-playground/tree/main/app/parallel-routes">
            Code
          </ExternalLink>
        </div>
      </div>
    </div>
  );
}
