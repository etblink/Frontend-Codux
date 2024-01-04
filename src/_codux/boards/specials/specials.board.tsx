import { createBoard } from '@wixc3/react-board';
import { Specials } from '../../../components/specials/specials';

export default createBoard({
    name: 'Specials',
    Board: () => <Specials />,
    isSnippet: true,
});
