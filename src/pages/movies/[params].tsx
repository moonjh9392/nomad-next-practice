import { useRouter } from 'next/router';

export default function Detail() {
  const router = useRouter();
  const [title, id]: any = router.query.params || [];

  return (
    <div>
      <h4>{title || 'Loading...'}</h4>
    </div>
  );
}

//새로고침시 SEO문제 해결
export function getServerSideProps({ params: { params } }: any) {
  return {
    props: {
      params,
    },
  };
}
