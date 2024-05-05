import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DashboardPage } from '@finhub/pages/DashboardPage';
import { UserTypeListPage } from '@finhub/pages/UserTypePage';
import { UserTypeCreatePage } from '@finhub/pages/UserTypePage/Create';
import { UserTypeDetailPage } from '@finhub/pages/UserTypePage/Detail';
import { TopicDetailPage } from '@finhub/pages/TopicPage/Detail';
import { TopicCreatePage } from '@finhub/pages/TopicPage/Create';
import { TopicListPage } from '@finhub/pages/TopicPage';
import { CategoryListPage } from '@finhub/pages/CategoryPage';
import { CategoryCreatePage } from '@finhub/pages/CategoryPage/Create';
import { CategoryDetailPage } from '@finhub/pages/CategoryPage/Detail';
import { ErrorPage } from '@finhub/pages/ErrorPage';
import { LogListPage } from '@finhub/pages/LogPage';
import { NoWordListPage } from '@finhub/pages/NoWordPage';
import { QuizListPage } from '@finhub/pages/QuizPage';
import { AvatarListPage } from '@finhub/pages/AvatarPage';
import { AnnounceListPage } from '@finhub/pages/AnnouncePage';
import { AnnounceCreatePage } from '@finhub/pages/AnnouncePage/create';
import { AnnounceDetailPage } from '@finhub/pages/AnnouncePage/detail';

export const FHPath: { [key: string]: { label: string; link: string } } = {
  dashboard: { label: '대시보드', link: '/' },
  categories: { label: '카테고리', link: '/services/categories' },
  categoriesCreate: {
    label: '카테고리 생성',
    link: '/services/categories/create',
  },
  categoriesDetail: {
    label: '카테고리 상세',
    link: '/services/categories/:id',
  },
  topics: { label: '주제', link: '/services/topics' },
  topicsCreate: { label: '주제 생성', link: '/services/topics/create' },
  topicsDetail: { label: '주제 상세', link: '/services/topics/:id' },
  usertypes: { label: '유저유형', link: '/services/usertypes' },
  usertypesCreate: {
    label: '유저유형 생성',
    link: '/services/usertypes/create',
  },
  usertypesDetail: { label: '유저유형 상세', link: '/services/usertypes/:id' },
  logs: { label: 'GPT 로그', link: '/services/logs' },
  noWords: { label: '단어 요청', link: '/services/noWords' },
  quizzes: { label: '퀴즈', link: '/services/quizzes' },
  avatars: { label: '아바타', link: '/services/avatars' },
  announces: { label: '', link: '/services/announces' },
  announceCreate: { label: '아바타', link: '/services/announces/create' },
  announceDetail: { label: '아바타', link: '/services/announces/:id' },
};

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={FHPath.dashboard.link} element={<DashboardPage />} />
        <Route path={FHPath.usertypes.link} element={<UserTypeListPage />} />
        <Route
          path={FHPath.usertypesCreate.link}
          element={<UserTypeCreatePage />}
        />
        <Route
          path={FHPath.usertypesDetail.link}
          element={<UserTypeDetailPage />}
        />
        <Route path={FHPath.categories.link} element={<CategoryListPage />} />
        <Route
          path={FHPath.categoriesCreate.link}
          element={<CategoryCreatePage />}
        />
        <Route
          path={FHPath.categoriesDetail.link}
          element={<CategoryDetailPage />}
        />
        <Route path={FHPath.topics.link} element={<TopicListPage />} />
        <Route path={FHPath.topicsCreate.link} element={<TopicCreatePage />} />
        <Route path={FHPath.topicsDetail.link} element={<TopicDetailPage />} />
        <Route path={FHPath.logs.link} element={<LogListPage />} />
        <Route path={FHPath.noWords.link} element={<NoWordListPage />} />
        <Route path={FHPath.quizzes.link} element={<QuizListPage />} />
        <Route path={FHPath.avatars.link} element={<AvatarListPage />} />
        <Route path={FHPath.announces.link} element={<AnnounceListPage />} />
        <Route
          path={FHPath.announceCreate.link}
          element={<AnnounceCreatePage />}
        />
        <Route
          path={FHPath.announceDetail.link}
          element={<AnnounceDetailPage />}
        />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
