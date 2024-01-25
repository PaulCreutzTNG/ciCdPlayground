import App from './App.svelte';

new App({
	target: document.body,
	props: {
		// What's your name?
		name: 'Paul Creutz',
		// In the following fiels you can either give a single string, 
		// or an array of bullet points
		
		// What do you associate with the term 'CI/CD'?
		associations: [
			'Continuous deployment of new features in an automated way',
		],
		// Which CI/CD tools do you use in your project?
		tools: 'GitHub Actions?',
		// What do you want to learn in this workshop? 
		expectations: [
			'Better understand the concept of CI/CD'
		],
		// What do you like to do when you're not coding?
		hobbies: [
			'soccer',
			'table tennis'
		]
	}
});
