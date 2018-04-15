import country from '../constants/country';

const dataFactory = (country, priority = 1000) => ({
	country,
	priority
});

export default {
	CL: dataFactory(country.EUROPE, 0),
	EL: dataFactory(country.EUROPE, 1),
	EC: dataFactory(country.EUROPE, 2),

	WC: dataFactory(country.WORLD, 3),

	PL: dataFactory(country.ENGLAND, 10),
	FAC: dataFactory(country.ENGLAND, 20),

	PD: dataFactory(country.SPAIN, 30),
	CDR: dataFactory(country.SPAIN, 40),

	BL1: dataFactory(country.GERMANY, 50),
	DFB: dataFactory(country.GERMANY, 60),

	SA: dataFactory(country.ITALY, 70),

	FL1: dataFactory(country.FRANCE, 80),

	DED: dataFactory(country.NETHERLANDS, 90),

	PPL: dataFactory(country.PORTUGAL, 100)
};
