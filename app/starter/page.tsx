import { ExternalLink } from '#/ui/external-link';

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">목적</h1>

      <ul>
        <li>Next.js 17 버전 라우팅 스터디 및 샘플 페이지</li>
        <li>Next structure</li>
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
  );
}
