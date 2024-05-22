import UserInfo from '../molecules/UserInfo';
import Button from '../atoms/Button';
import '../../styles/organisms/user-profile.css';

interface UserProfileProps {
    user: {
        name: string;
        bio: string;
        avatar: string;
    };
    onMessageClick: () => void;
}

const UserProfile = ({ user = { name: '', bio: '', avatar: '' }, onMessageClick = () => { } }: UserProfileProps) => {
    if (!user) {
        return null;
    }
    return (
        <div className="user-profile">
            <UserInfo name={user.name} bio={user.bio} avatarSrc={user.avatar} />
            <Button type='button' text="Message" onClick={onMessageClick} />
        </div>
    );
};

export default UserProfile;
