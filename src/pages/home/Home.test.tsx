import { screen } from '@testing-library/react';
import { renderWith } from '../../tests/render';
import { Home } from './Home';

describe('<Home />', () => {
  it('should render content', () => {
    renderWith(<Home title='PrimeFT Test' />);

    expect(screen.getByText('PrimeFT Test')).toBeInTheDocument();
  });
});
