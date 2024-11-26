import { useState, useEffect, ChangeEvent } from "react";
import styled from "@emotion/styled";
import Theme from "../../styles/theme";
import { Title, Label, Input, Button, Container } from "../../styles/common";

import { GetMyHobby, GetUserHobby } from "../../apis/user";

const UserHobby = () => {
  const [myHobby, setMyHobby] = useState<string>("");
  const [userNo, setUserNo] = useState<string>("");
  const [searchResult, setSearchResult] = useState<{
    userNo: string;
    hobby: string;
  }>({
    userNo: "",
    hobby: "",
  });

  // 내 취미 가져오기
  useEffect(() => {
    const storedHobby = localStorage.getItem("hobby");
    console.log("로컬 스토리지에서 가져온 취미:", storedHobby);
    if (storedHobby) {
      setMyHobby(storedHobby);
    } else {
      const fetchHobby = async () => {
        try {
          const hobby = await GetMyHobby();
          console.log("API에서 가져온 취미:", hobby);
          setMyHobby(hobby);
        } catch (error) {
          console.error("취미 가져오기 실패:", error);
        }
      };
      fetchHobby();
    }
  }, []);

  // 입력값 변경 핸들러
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserNo(e.target.value);
  };

  // 다른 사람의 취미 검색
  const searchUserHobby = async () => {
    if (!userNo) {
      alert("사용자 번호를 입력해주세요.");
      return;
    }
    try {
      console.log("검색 요청 사용자 번호:", userNo);
      const hobby = await GetUserHobby(userNo);
      console.log("검색 결과 취미:", hobby);
      setSearchResult({ userNo, hobby });
    } catch (error) {
      console.error("취미 검색 실패:", error);
    }
  };

  return (
    <Container>
      <Title>취미</Title>
      <Label>나의 취미</Label>
      <HobbyText>{myHobby || "취미 정보를 불러올 수 없습니다."}</HobbyText>
      <Label htmlFor="userNo">다른 사람들의 취미</Label>
      <Input
        id="userNo"
        placeholder="사용자 번호"
        type="text"
        value={userNo}
        onChange={handleInputChange}
        autoComplete="off"
      />
      <Button onClick={searchUserHobby}>검색</Button>
      {searchResult.userNo && (
        <HobbyText>
          {searchResult.userNo}번 사용자의 취미 : {searchResult.hobby}
        </HobbyText>
      )}
    </Container>
  );
};

export default UserHobby;

const HobbyText = styled.span`
  font-size: ${Theme.fontSize.medium};
  font-weight: ${Theme.fontWeight.medium};
  color: ${Theme.color.brown};
  text-align: start;
`;
