import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import dotenvPlugin from "rollup-plugin-dotenv";
import json from "@rollup/plugin-json";
import postcss from "rollup-plugin-postcss";


export default {
    input: 'src/index.js',
    output: {
        file: 'public/bundle.js',
        format: 'umd', // es* | amd | umd | iife | system
        sourcemap: 'inline',
    },
    watch: {
        include: 'src/**',
        cleanSeen: true,
        buildDelay: 500
    },
    plugins: [
        nodeResolve(),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
            extensions: ['.js', '.jsx'],
        }),
        commonjs(),
        postcss({
            modules: true,
            use: ['less']
        }),
        json(),
        dotenvPlugin(),
    ],
};
