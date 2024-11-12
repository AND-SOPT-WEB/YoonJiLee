import React, { useState } from 'react';
import HobbyPage from '../components/Mypage/Hobby/HobbyPage';
import InfoPage from '../components/Mypage/Info/InfoPage';
import MyPageHeader from '../components/Mypage/MyPageHeader';

const MyPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hobby' | 'info'>('hobby');

  return (
    <div>
      <MyPageHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'hobby' ? <HobbyPage /> : <InfoPage />}
    </div>
  );
};

export default MyPage;
