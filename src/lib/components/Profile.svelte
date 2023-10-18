<style lang="postcss">
    .profile_section {
        @apply flex flex-row my-8 px-2;
    }
    .avatar_wrapper {
        @apply h-24 w-24 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full flex justify-center items-center cursor-pointer;
    }
    .avatar_border {
        @apply border-white border-4 m-1 rounded-full;
    }
    .avatar_wrapper img {
        @apply w-full h-full object-cover rounded-full;
    }
    .right_col {
        @apply flex flex-row items-center justify-between w-[-webkit-fill-available] px-6;
    }
    .right_col p {
        @apply text-xs;
    }
    .stat_col {
        @apply flex flex-col items-center;
    }
    .stat_col h3 {
        @apply text-xl font-semibold;
    }
</style>

<section class="profile_section">
    <div class="left_col">
        <div class="avatar_wrapper">
            <div class="avatar_border">
                <img src="/images/seven-african-sisters.png" />
            </div>
        </div>
    </div>
    <div class="right_col">
        <div class="stat_col">
            <h3>31</h3>
            <p>Posts</p>
        </div>
        <div class="stat_col">
            <h3>3236</h3>
            <p>Followers</p>
        </div>
        <div class="stat_col">
            <h3>22</h3>
            <p>Following</p>
        </div>
    </div>

</section>