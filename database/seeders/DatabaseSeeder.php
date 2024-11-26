<?php

namespace Database\Seeders;


use App\Models\User;
use App\Enum\PermissionsEnum;
use App\Enum\RolesEnum;
use App\Models\Feature;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $userRole = Role::create(['name' => RolesEnum::User->value]);
        $adminRole = Role::create(['name' => RolesEnum::Admin->value]);
        $commenterRole = Role::create(['name' => RolesEnum::Commenter->value]);


        $manageFeaturesPermissions = Permission::create([
            'name' => PermissionsEnum::ManageFeatures->value
        ]);
        $manageCommentsPermissions = Permission::create([
            'name' => PermissionsEnum::ManageComments->value
        ]);
        $manageUsersPermissions = Permission::create([
            'name' => PermissionsEnum::ManageUsers->value
        ]);
        $upvoteDownvotePermissions = Permission::create([
            'name' => PermissionsEnum::UpvoteDownvote->value
        ]);

        $userRole->syncPermissions([$upvoteDownvotePermissions]);
        $commenterRole->syncPermissions  ([$upvoteDownvotePermissions,                  $manageCommentsPermissions]);

         $adminRole->syncPermissions([$upvoteDownvotePermissions,        $manageCommentsPermissions, $manageFeaturesPermissions, $manageUsersPermissions]);


        User::factory()->create([
            'name' => 'User User',
            'email' => 'user@example.com',
        ])->assignRole(RolesEnum::User);
        User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
        ])->assignRole(RolesEnum::Admin);

        User::factory()->create([
            'name' => 'Commenter User',
            'email' => 'commenter@example.com',
        ])->assignRole(RolesEnum::Commenter);

        Feature::factory(100)->create();
    }
}
