import fs from 'fs';
import { MatchResult } from './MatchResult';
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';

const csvFileReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);

matchReader.load();




console.log(`Man United won ${manUnitedWins} games`);
