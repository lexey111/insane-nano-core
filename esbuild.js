import esbuild from 'esbuild'
import htmlPlugin from '@chialab/esbuild-plugin-html'

esbuild
    .build({
        entryPoints: [
            'src/index.html',
            'src/dashboard.html'
        ],
        assetNames: 'assets/[name]-[hash]',
        chunkNames: '[ext]/[name]-[hash]',
        outdir: 'dist',
        metafile: true,
        bundle: true,
        minify: true,
        minifyWhitespace: true,
        minifySyntax: true,
        minifyIdentifiers: true,
        sourcemap: true,
        plugins: [htmlPlugin()],
    })
    .then(() => console.log('✅  Build complete!'))
    .catch(() => process.exit(1))
