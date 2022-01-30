export type Destination = {
    name: string;
    images: {
        png: string;
        webp: string;
    };
    description: string;
    distance: string;
    travel: string;
};

export type Destinations = Destination[];

export type CrewMemb = {
    name: string;
    images: {
        png: string;
        webp: string;
        width: number;
        height: number;
    };
    role: string;
    bio: string;
};

export type CrewTypes = CrewMemb[];

export type Tech = {
    name: string;
    images: {
        portrait: {
            src: string;
            width: number;
            height: number;
        };
        landscape: {
            src: string;
            width: number;
            height: number;
        };
    };
    description: string;
};

export type TechTypes = Tech[];

export type Data = {
    destinations: Destinations;
    crew: CrewTypes;
    technology: TechTypes;
};