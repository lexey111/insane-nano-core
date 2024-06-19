import esbuild from 'esbuild'
import htmlPlugin from '@chialab/esbuild-plugin-html'

const ctx = await esbuild.context({
    logLevel: 'debug',
    entryPoints: [
        'src/pages/main/index.html',
        'src/pages/dashboard/dashboard.html'
    ],
    assetNames: 'assets/[name]-[hash]',
    chunkNames: '[ext]/[name]-[hash]',
    outdir: 'dist',
    bundle: true,
    banner: {
        js: 'new EventSource("/esbuild").addEventListener(' +
            '"change", () => setTimeout(() => location.reload(), 1000));'
    },
    plugins: [
        htmlPlugin()
    ],
})

console.log('✅ Build complete... running watch.\n');

await ctx.watch();

await ctx.serve({
    servedir: 'dist',
    port: 3000,
});
