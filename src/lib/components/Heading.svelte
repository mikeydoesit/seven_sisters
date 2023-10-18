<style lang="postcss">
    .top_section {
        @apply flex flex-row w-full;
    }
    .left_column, .right_column {
        @apply flex flex-row items-center;
    }
    .right_column {
        @apply justify-end w-1/3;
    }
    .left_column {
        @apply justify-start w-2/3;
    }
    h1 {
        @apply font-bold text-lg ml-2;
    }
    .icon_wrapper {
        @apply h-6 w-6 mr-3;
    }
    .icon_wrapper img {
        @apply w-full h-full;
    }
</style>



<section>
    <div class="top_section">
        <div class="left_column">
            <div class="icon_wrapper">
                <img src="/images/left_arrow.png" />
            </div>
            <h1>seven_sisters_salon</h1>
        </div>
        <div class="right_column">
            <div class="icon_wrapper">
                <img src="/images/notification.png" />
            </div>
            <div class="icon_wrapper">
                <img src="/images/three_dots.png" />
            </div>
        </div>
    </div>
</section>