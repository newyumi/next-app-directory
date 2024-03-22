export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Server Side Rendering</h1>

      <ul>
        <li>
          SSR은 서버가 HTML 파일을 만들어 보내주면 브라우저가 받고, 이후 JS
          파일을 다운받아서 React를 실행함, 이 후 페이지 작동. 첫페이지 로딩속도
          빠르고, 검색엔진 최적화가 가능.
        </li>
        <li>
          But, 초기 로딩 이후 페이지 이동 시 CSR에 비해 느리고, 깜빡임 이슈가
          있을 수 있음.
        </li>
      </ul>
    </div>
  );
}
