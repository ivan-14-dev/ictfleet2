import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: #3b82f6;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 2rem;
  padding: 0;
  &:hover {
    text-decoration: underline;
  }
`;

const ProfileCard = styled.div`
  background: white;
  border-radius: 1.5rem;
  padding: 2.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  text-align: center;
`;

const Avatar = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 700;
  margin: 0 auto 1.5rem;
  background-image: ${props => props.backgroundImage ? `url(${props.backgroundImage})` : 'none'};
  background-size: cover;
  background-position: center;
`;

const Name = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: #0d141b;
  margin: 0 0 0.5rem;
`;

const Role = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  text-align: left;
`;

const InfoItem = styled.div`
  p {
    margin: 0;
    font-size: 0.875rem;
    color: #64748b;
    margin-bottom: 0.25rem;
  }
  span {
    font-weight: 600;
    color: #0d141b;
    font-size: 1rem;
  }
`;

const EditButton = styled.button`
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.2s;
  &:hover {
    background: #2563eb;
  }
`;

const ProfilePage = ({ currentUser, onBack, onEdit }) => {
  const fullName = `${currentUser?.first_name || ''} ${currentUser?.last_name || ''}`.trim() || currentUser?.username || 'User';
  const initials = `${currentUser?.first_name?.charAt(0) || 'U'}${currentUser?.last_name?.charAt(0) || ''}`;

  return (
    <Container>
      <BackButton onClick={onBack}>
        <span className="material-symbols-outlined">arrow_back</span>
        Back to Dashboard
      </BackButton>

      <ProfileCard>
        <Avatar backgroundImage={currentUser?.profile_picture}>
          {initials}
        </Avatar>
        <Name>{fullName}</Name>
        <Role>{currentUser?.role?.charAt(0).toUpperCase() + currentUser?.role?.slice(1) || ''}</Role>

        <InfoGrid>
          <InfoItem>
            <p>Username</p>
            <span>{currentUser?.username || 'N/A'}</span>
          </InfoItem>
          <InfoItem>
            <p>Email</p>
            <span>{currentUser?.email || 'N/A'}</span>
          </InfoItem>
          <InfoItem>
            <p>Phone</p>
            <span>{currentUser?.phone_number || 'N/A'}</span>
          </InfoItem>
          <InfoItem>
            <p>Department</p>
            <span>{currentUser?.department || 'N/A'}</span>
          </InfoItem>
          <InfoItem>
            <p>Employee ID</p>
            <span>{currentUser?.employee_id || 'N/A'}</span>
          </InfoItem>
        </InfoGrid>

        <EditButton onClick={onEdit}>
          <span className="material-symbols-outlined">edit</span>
          Edit Profile
        </EditButton>
      </ProfileCard>
    </Container>
  );
};

export default ProfilePage;
