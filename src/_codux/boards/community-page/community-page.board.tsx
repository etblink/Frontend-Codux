import { createBoard } from '@wixc3/react-board';
import { CommunityPage } from '../../../components/community-page/community-page';

export default createBoard({
    name: 'CommunityPage',
    Board: () => <CommunityPage />,
    isSnippet: true,
});
