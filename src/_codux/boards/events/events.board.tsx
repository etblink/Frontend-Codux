import { createBoard } from '@wixc3/react-board';
import { Events } from '../../../components/events/events';

export default createBoard({
    name: 'Events',
    Board: () => <Events />,
    isSnippet: true,
});
