<?php

use Way\Tests\Assert;
use Way\Tests\Should;

class SampleTest {

	public function testAdd()
	{
		Assert::equals(20, 20);
		Assert::greaterThan(20, 21);
		Should::equal('Test', 'Test');
	}

}