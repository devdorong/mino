import MainHeader from '@/components/MainHeader';
import PageContent from '@/components/PageContent';
import PageHeader from '@/components/PageHeader';
import SubHeader from '@/components/SubHeader';

function IndexPage() {
  const currentPage = {
    id: '1',
    title: '페이지 제목',
    content: '<p>페이지 내용</p>',
  };
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      <MainHeader />
      <div className="flex">
        <SubHeader />
        <main className="pt-16 ml-[280px] w-full bg-white dark:bg-gray-900">
          <PageHeader />
          <div className="h-full">
            <PageContent />
          </div>
        </main>
      </div>
    </div>
  );
}

export default IndexPage;
