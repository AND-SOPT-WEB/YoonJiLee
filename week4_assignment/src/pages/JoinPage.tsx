import React, { useState } from 'react';
import JoinNameForm from '../components/Join/JoinNameForm';
import JoinPasswordForm from '../components/Join/JoinPasswordForm';
import JoinHobbyForm from '../components/Join/JoinHobbyForm';

const JoinPage: React.FC = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);

  return (
    <div>
      <h2>회원가입</h2>
      {step === 1 && <JoinNameForm nextStep={nextStep} />}
      {step === 2 && <JoinPasswordForm nextStep={nextStep} />}
      {step === 3 && <JoinHobbyForm />}
      <p>
        이미 회원이신가요? <a href="/login">로그인</a>
      </p>
    </div>
  );
};

export default JoinPage;
