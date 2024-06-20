import { writable } from 'svelte/store';
import type { RSVPConfirmation } from '../constants/rsvp_confirmation';

const apiEndpoint = 'http://api.wisudaibnuabbas.com';

const fetcRSVPs = async (): Promise<RSVPConfirmation[]> => {
	const response = await fetch(`${apiEndpoint}/rsvps`);
	return await response.json();
};

const createRSVP = async (rsvp: Omit<RSVPConfirmation, 'id'>): Promise<RSVPConfirmation> => {
	const response = await fetch(`${apiEndpoint}/rsvp`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(rsvp)
	});
	return await response.json();
};

// initialize rsvp datas
const rsvps = writable<RSVPConfirmation[]>([]);
const loadRSVPS = async () => {
	const response = await fetcRSVPs();
	rsvps.set(response);
};

loadRSVPS();

export { rsvps, createRSVP, loadRSVPS };
