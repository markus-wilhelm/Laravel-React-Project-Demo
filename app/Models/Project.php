<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int id
 * @property string name
 * @property string description
 * @property string created_at
 * @property string updated_at
 */
class Project extends Model
{
    use HasFactory;
}
