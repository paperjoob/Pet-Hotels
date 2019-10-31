CREATE TABLE pets (
    id SERIAL PRIMARY KEY,
    pet_name text,
    color text,
    breed text,
    owner_name text,
    owner_id integer REFERENCES owners(id),
    checked_in boolean,
    checked_in_date text
);
CREATE TABLE owners (
    id SERIAL PRIMARY KEY,
    name text,
    pet_count integer
);