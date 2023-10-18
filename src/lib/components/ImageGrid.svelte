<script>
    import Posts from '../components/data/Posts'
    import { 
        Lightbox,
        LightboxGallery,
        GalleryThumbnail,
        GalleryImage
    } from 'svelte-lightbox'
    
</script>

<style lang="postcss">
    .image_grid {
        @apply grid grid-cols-three_column;
    }
    .svelte-lightbox-thumbnail {
        @apply h-36;
    }
    .svelte-lightbox-thumbnail img {
        @apply h-full w-full object-cover;
    }
</style>


<section class="gallery">
<LightboxGallery
    arrowsConfig={
        {
            character:'hide'
        }
    }
    showCloseButton={false}

>
    <!-- Layout-->
    <svelte:fragment slot="thumbnail">
        <div class="image_grid">
            {#each Posts as post}
                <GalleryThumbnail>
                    <img src={post.url} alt={post.title}>
                </GalleryThumbnail>
            {/each}
        </div>
    </svelte:fragment>
    
    {#each Posts as post}
        <GalleryImage>
            <img src={post.url} alt={post.title}>
        </GalleryImage>
    {/each}
</LightboxGallery>

</section>