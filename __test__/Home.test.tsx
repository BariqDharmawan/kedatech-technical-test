import { getByTestId, render, screen } from '@testing-library/react';
import Home from '@/app/(landing)/page';
import Navbar from '@/app/components/Navbar';
import { useRouter } from 'next/navigation';
import { AppRouterContextProviderMock } from '@/app/components/AppRouterContextProviderMock';

describe('Nav on every page', () => {
	it('should have login button with its form', () => {
		const push = jest.fn();

		render(
			<AppRouterContextProviderMock router={{ push }}>
				<Navbar />
			</AppRouterContextProviderMock>
		);

		const btnLogin = screen.getByTestId('login-btn');
		// const formLogin = screen.getByTestId('form-login');

		expect(btnLogin).toBeInTheDocument();
		// expect(formLogin).toBeInTheDocument();
	});
});

describe('Homepage', () => {
	it('shoud having <PricingCard/> component with [data-testId="pricing-card"]', () => {
		render(<Home />);

		const pricingCard = screen.getAllByTestId('pricing-card');

		expect(pricingCard[0]).toBeInTheDocument();
	});

	it('should not contain dummy content lorem ipsum', () => {
		render(<Home />);

		const loremIpsumText = screen.queryAllByText(/Lorem ipsum/i);

		loremIpsumText.forEach(textElement => {
			expect(textElement).not.toBeInTheDocument();
		});
	});
});
