import { createBoard } from '@wixc3/react-board';
import { History } from '../../../components/history/history';

export default createBoard({
    name: 'History',
    Board: () => <History />,
    isSnippet: true,
});
