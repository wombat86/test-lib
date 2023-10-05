import sh from 'shelljs';

const DIST_DIR = './dist';
const PACKAGE_DIR = './package';
const FILES_TO_COPY = [
    'package.json',
    'tsconfig.json',
    'LICENSE'
]

sh.rm('-rf', PACKAGE_DIR);
sh.cp('-r', DIST_DIR, PACKAGE_DIR);
FILES_TO_COPY.forEach((file) => {
    sh.cp(file, PACKAGE_DIR);
});
