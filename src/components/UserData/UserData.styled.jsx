import styled from 'styled-components';
import { InputCommon } from 'components/common/shared.styled';

export const UserInput = styled(InputCommon)`
  border: none;
  background-color: transparent;
  margin: 0;
  width: 272px;
  font-weight: 400;

  &.enabled {
    background-color: red;
  }
`;

export const UserTitle = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 38px;

  margin-bottom: 24px;
  color: #111;
`;

export const UserWrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 411px;
  border-radius: 0 40px 40px 0;
  position: relative;
  left: -32px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  padding: 20px 16px;
`;

export const UserImageWrapper = styled.div`
  width: 233px;
  height: 233px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 auto 36px auto;
  object-fit: contain;
`;

export const UserLabel = styled.label`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.04em;
  display: flex;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const UserSpan = styled.span`
  width: 107px;
`;

export const EditPhotoLabel = styled.label`
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0.04em;

  background-color: #fff;
  color: black;
  position: absolute;
  left: 92%;
  bottom: 0;
  padding: 0;
  display: flex;
  white-space: nowrap;
  cursor: pointer;
`;

export const AvatarInput = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
`;

export const EditAvatarIcon = styled.svg`
  width: 20px;
  height: 20px;
  margin-right: 4px;
  fill: #f59256;

  transition: fill 250ms ease-in-out;

  &:hover {
    fill: #ff6101;
  }
`;
