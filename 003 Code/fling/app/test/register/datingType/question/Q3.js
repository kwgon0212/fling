const Q3 = (props) => {
  const handleQuestion = (ans) => {
    let copy = [...props.answer];
    copy[2] = ans;
    props.setAnswer(copy);
  };

  const handleNextBtn = () => {
    props.setPage((prev) => prev + 1);
  };

  const handlePrevBtn = () => {
    props.setPage((prev) => prev - 1);
  };

  return (
    <>
      <div className='w-full mt-[120px] text-start'>
        <span className='text-title'>Q3</span>
      </div>

      <div className='w-full my-[20px]'>
        <img className='w-full h-[200px] bg-main-red' />
        <div className='text-start text-subtitle opacity-70 mt-[20px]'>
          <p>회원님의 연인과 함께 있을 때</p>
          <p>주로 어떤 활동을 선호하시나요?</p>
        </div>
      </div>

      <div className='w-full flex flex-col gap-[20px]'>
        <button
          onClick={() => handleQuestion(1)}
          className={`py-[15px] ${props.answer[2] == 1 ? 'focus-btn' : 'btn'}`}
        >
          로맨틱한 식사나 영화 관람
        </button>
        <button
          onClick={() => handleQuestion(2)}
          className={`py-[15px] ${props.answer[2] == 2 ? 'focus-btn' : 'btn'}`}
        >
          서로의 취미를 공유하고 함께 즐김
        </button>
        <button
          onClick={() => handleQuestion(3)}
          className={`py-[15px] ${props.answer[2] == 3 ? 'focus-btn' : 'btn'}`}
        >
          각자의 시간을 존중하며 따로 시간을 보냄
        </button>
      </div>

      <div className='w-full flex gap-[10px]'>
        <button
          disabled={props.answer[1] === 0}
          onClick={handlePrevBtn}
          className={`w-full h-[60px] my-[30px] ${props.answer[1] !== 0 ? 'full-btn' : 'disabled-btn'}`}
        >
          이전질문
        </button>
        <button
          disabled={props.answer[2] === 0}
          onClick={handleNextBtn}
          className={`w-full h-[60px] my-[30px] ${props.answer[2] !== 0 ? 'full-btn' : 'disabled-btn'}`}
        >
          다음질문
        </button>
      </div>
    </>
  );
};

export default Q3;
