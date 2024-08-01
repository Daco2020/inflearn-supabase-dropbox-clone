import UI from "./ui";

// metadata 정보를 추가하려면 UI 컴포넌트를 별도로 분리하는 것이 좋다.
// use client 는 metadata 를 사용하지 못하기 때문이다.
export const metadata = {
  title: "Home",
  description: "Home page",
};

export default function Home() {
  return <UI />;
}
