import React, { useState } from 'react';
import styled from '@emotion/styled';
import { CreatePageTemplate } from '@finhub/components/templates/Create';
import { FHTextInput } from '@finhub/components/atoms/TextInput';
import { FHButton } from '@finhub/components/atoms/Button';
import { FHFormItem } from '@finhub/components/organisms/FormItem';
import { FHUploader } from '@finhub/components/atoms/Uploader';
import { useNavigate } from 'react-router-dom';
import { columnAPI } from '@finhub/api/column';
import { FHTextArea } from '@finhub/components/atoms/TextArea';
import { TopicEditor } from '@finhub/components/organisms/TopicEditor';

export const ColumnCreatePage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [topicList, setTopicList] = useState<{ id: number; title: string }[]>(
    [],
  );

  const handleTextChange =
    (type: string) =>
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
      const { value } = e.target;
      if (type === 'title') {
        setTitle(value);
      } else if (type === 'summary') {
        setSummary(value);
      } else if (type === 'content') {
        setContent(value);
      }
    };

  const handleSubmit = async () => {
    if (!title) {
      alert('컬럼명을 입력해주세요');
      return;
    }

    if (!summary) {
      alert('컬럼요약을 입력해주세요');
      return;
    }

    if (!content) {
      alert('컬럼내용을 입력해주세요');
      return;
    }

    if (!topicList) {
      alert('관련 토픽을 입력해주세요');
      return;
    }

    const data = await columnAPI.create({
      title,
      summary,
      content,
      topicList: topicList.map((topic) => topic.id),
      file: thumbnail,
    });

    alert('반영되었습니다.');
    navigate(`/services/columns/${data.id}`);
  };

  return (
    <CreatePageTemplate label="컬럼 추가">
      <S.formItemWrapper>
        <FHFormItem direction="vertical" label="썸네일">
          <FHUploader thumbnail={thumbnail} setThumbnail={setThumbnail} />
        </FHFormItem>
      </S.formItemWrapper>
      <S.formItemWrapper>
        <FHFormItem direction="vertical" label="컬럼명">
          <FHTextInput
            type="text"
            value={title}
            onChange={handleTextChange('title')}
          />
        </FHFormItem>
      </S.formItemWrapper>
      <S.formItemWrapper>
        <FHFormItem direction="vertical" label="컬럼요약">
          <FHTextInput
            type="text"
            value={summary}
            onChange={handleTextChange('summary')}
          />
        </FHFormItem>
      </S.formItemWrapper>
      <S.formItemWrapper>
        <FHFormItem direction="vertical" label="컬럼내용">
          <FHTextArea value={content} onChange={handleTextChange('content')} />
        </FHFormItem>
      </S.formItemWrapper>
      <S.formItemWrapper>
        <FHFormItem direction="vertical" label="관련 토픽">
          <TopicEditor data={topicList} setter={setTopicList} />
        </FHFormItem>
      </S.formItemWrapper>
      <S.formItemWrapper>
        <FHButton width="100%" onClick={handleSubmit} type="primary">
          컬럼 추가
        </FHButton>
      </S.formItemWrapper>
    </CreatePageTemplate>
  );
};

const S = {
  formItemWrapper: styled.div`
    max-width: 720px;
    width: 100%;
    padding: 0 16px;
    margin-bottom: 32px;
  `,
};
