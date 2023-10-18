<script>
    import Posts from '../components/data/Posts'
</script>

<style lang="postcss">
    .image_grid {
        @apply grid grid-cols-three_column;
    }
    .post_wrapper {
        @apply h-36;
    }
    .post_wrapper img {
        @apply h-full w-full object-cover;
    }
</style>

<section class="image_grid">
    {#each Posts as post}
        <div class="post_wrapper">
            <img src={post.url} alt={post.title} />
        </div>
    {/each}
</section>