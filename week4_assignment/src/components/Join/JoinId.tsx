import {useState} from 'react';

interface Props {
    nextStep: () =>void;
}

const JoinId: React.FC<Props> = ({ nextStep }) => {
    const [name, setName] = useState('');
  
    const handleNext = () => {
      if (name.length <= 8) nextStep();
      else alert('아이디는 8자 이하여야 합니다');
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder="아이디"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleNext} disabled={!name}>
          다음
        </button>
      </div>
    );
  };
  
  export default JoinId;