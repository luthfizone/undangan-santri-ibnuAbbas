export interface RSVPConfirmation {
    name: string;
    message: string;
    confirmation: ConfirmationType,
}

export enum ConfirmationType {
    HADIR = "Hadir",
    TIDAK_HADIR = "Tidak Hadir",
    RAG_RAGU = "Ragu-Ragu",
}