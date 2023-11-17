<script lang="ts">
	import SubscriptionContainer from './subscriptionContainer.svelte';
</script>

<div class="container mx-auto p-4">
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		<SubscriptionContainer
			subscriptionName="Demo name"
			price="Free"
			description="Demo subscription"
			link="/link"
			currently_subscribed={false}
		/>
		<SubscriptionContainer
			subscriptionName="Demo name"
			price="Free"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla elementum ante a porta. Phasellus eu convallis sem, at aliquet tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla consequat eros vehicula, imperdiet sem nec, fermentum diam. Suspendisse et bibendum leo, at congue lectus. Aenean convallis nulla nisi, non pretium libero bibendum et. Quisque in metus sit amet libero cursus efficitur ac sit amet felis. Mauris nunc augue, aliquet a laoreet sit amet, rhoncus nec mi. Mauris ullamcorper velit a nibh ullamcorper, in porta neque condimentum. Sed a felis feugiat, vulputate dolor et, iaculis justo. Morbi pulvinar, mi non efficitur hendrerit, magna nisl viverra leo, eget laoreet lorem elit vel nisl. Mauris sed tempor tellus, a interdum turpis. Etiam feugiat ante risus, vel convallis erat facilisis eget. Proin porttitor felis fringilla nisi pellentesque aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
			link="/link"
			currently_subscribed={false}
		/>
	</div>
</div>
