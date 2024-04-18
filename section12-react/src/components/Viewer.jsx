import "./Viewer.css";
import { getEmotionImage } from "../util/get-emotion-image";
import { emotionList } from "../util/constants";

const Viewer = () => {
  const emotionId = 4;

  const emotionItem = emotionList.find(
    (item) => String(item.emotionId) === String(emotionId)
  );

  return (
    <div className='Viewer'>
      <section className='img_section'>
        <h4>오늘의 감정</h4>
        <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
          <img src={getEmotionImage(emotionId)} />
          <div>{emotionItem.emotionName}</div>
        </div>
      </section>
      <section className='content_section'>
        <h4>오늘의 일기</h4>
        <div className='content_wrapper'>
          <p>
            가나다라마바사아자차카 타파하 가나 다라 마바사 아차자차 카아아
            아리나리나 아린아ㅓ라ㅣ널 sdfkvj in to fnad dkflsk dlksflskf
            lskflsdfk ldfls f ldlkjflskjflsf
          </p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;
